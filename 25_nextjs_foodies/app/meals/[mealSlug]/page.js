const MealDetailsPage = async ({ params }) => {
  const slug = (await params).mealSlug;
  return (
    <main>
      <h1>Meal Details</h1>
      <p>{slug}</p>
    </main>
  );
};
MealDetailsPage.propTypes = {
  params: Promise,
};
export default MealDetailsPage;
