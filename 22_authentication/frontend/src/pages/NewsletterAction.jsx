export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  // console.log(email);
  return {email: email, message: `Signup successful! email: ${email}` };
}
