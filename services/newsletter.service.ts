import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';

import { db } from '@/lib/firebase';

export async function subscribeNewsletter(
  email: string
) {
  const q = query(
    collection(db, 'newsletter'),
    where('email', '==', email)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    throw new Error('EMAIL_EXISTS');
  }

  return addDoc(
    collection(db, 'newsletter'),
    {
      email,
      createdAt: serverTimestamp(),
    }
  );
}