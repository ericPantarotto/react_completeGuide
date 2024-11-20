'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

const isInvalidText = (text) => {
  return !text || text.trim() === '';
};

export async function shareMeal(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error('Failed to create meal. Invalid Input');
    return {
      meal: meal,
      message: 'Invalid input.',
    };
  }

  // console.info(meal);
  await saveMeal(meal);
  revalidatePath('/meals', 'page');
  redirect('/meals');
}
