import { getFirestore, addDoc, serverTimestamp, collection, getDoc, getDocs, doc, query, where } from "firebase/firestore";
import { app } from "./config";
import timeline from "daisyui/components/timeline";


const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push({...doc.data(), id: doc.id});
    });

    return products;
};

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories = [];

    querySnapshot.forEach((doc) => {
        categories.push({...doc.data(), id: doc.id});
    });

    return categories;
};

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category));
    const filterProducts = [];

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
  filterProducts.push({...doc.data(), id: doc.id});
    });
    return filterProducts;
}

export const getDetail = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return{ ...docSnap.data(), id: docSnap.id}
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
}

export const createOrder = async (buyer, items, total, time) => {
    const order = {
        buyer,
        items, 
        total,
        time: serverTimestamp()
    };

    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Documento creado con ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error al agregar documento: ", error);
        throw error;
    }
}