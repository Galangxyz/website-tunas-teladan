import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';

import { db } from '@/lib/firebase';

import type { PPDBFormData } from '@/types/ppdb';

export async function submitPPDB(
  data: PPDBFormData
) {
  await addDoc(collection(db, 'ppdb'), {
    ...data,

    status: 'baru',

    createdAt: serverTimestamp(),
  });
}