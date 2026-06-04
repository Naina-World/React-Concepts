export default async function BlogPostPage({params}){
    const {id} = await params;
    return(
        <main>
            <h1>Blog Post</h1>
            <p>
                This is the content of blog post {id}
            </p>
        </main>
    )

}