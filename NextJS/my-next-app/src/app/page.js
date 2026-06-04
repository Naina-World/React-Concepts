import ClientComponent from "./component/ClientComponent";




export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const posts = await res.json();
  return(
    <main style={{padding:'20px'}}>
      <h1>
        Server Component -Posts (fetched on server)
      </h1>
      <section>
        {posts.map((post)=>(
          <article key={post.id} style={{marginBottom:'20px'}}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          </article>
        ))}
      </section>

      <h2>Client Component - Posts (Fetched on Client)</h2>
      <ClientComponent/>

    </main>

  );

}