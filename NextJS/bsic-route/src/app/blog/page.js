import Link from "next/link";

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "blog post 1",

        },
        {
            id: 2,
            title: "blog post 2",
        },
        {
            id: 3,
            title: "blog post 3"
        },

    ];

    return (
        <main>
            <h1>Blog Page</h1>
            <p>This is blog page</p>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}
                        </Link>

                    </li>
                ))}
            </ul>
        </main>
    )
}