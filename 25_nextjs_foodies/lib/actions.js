'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

const isInvalidText = (text) => {
  return !text || text.trim() === '';
};

const shareMeal = async (formData) => {
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
    throw new Error('Failed to create meal. Invalid Input');
  }

  // console.info(meal);
  await saveMeal(meal);
  redirect('/meals');
};

export { shareMeal };
