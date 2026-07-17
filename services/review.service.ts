import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";


export type Review = {
  id: string;
  name: string;
  email: string;
  subject: string;
  role: string;
  rating: number;
  message: string;
  likes: number;
  replies: number;
};



export async function addReview(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  rating: number;
}) {

  await addDoc(collection(db, "reviews"), {
  name: data.name,
  email: data.email,
  subject: data.subject,
  role: "Pengunjung",
  rating: data.rating,
  message: data.message,
  likes: 0,
  replies: 0,
  createdAt: serverTimestamp(),
});

}




export function listenReviews(
  callback: (reviews: Review[]) => void
) {

  const q = query(
    collection(db, "reviews"),
    orderBy("createdAt", "desc")
  );


  return onSnapshot(q, (snapshot)=>{

    const data = snapshot.docs.map((doc)=>({

      id: doc.id,

      ...(doc.data() as Omit<Review,"id">)

    }));


    callback(data);

  });

}