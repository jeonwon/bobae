export default async function Read(props) {
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, {
    cache: "no-store",
  });
  const topics = await resp.json();
  return (
    <div>
      <h2>{topics.body}</h2>
    </div>
  );
}
