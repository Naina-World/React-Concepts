export async function loader({params}){
    const post = {
        id: params.id,
        title: 'My blog post',
        likes: 3,
    };
    return post
}

export async function action({request}) {
    
}

export default function Post(){
    const post = useLoaderData()
    const fetch = useFetcher()

    return(
        <div>
            {post.title}
        </div>
    )

}