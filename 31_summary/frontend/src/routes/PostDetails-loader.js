export async function loader({ params }) {
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}
