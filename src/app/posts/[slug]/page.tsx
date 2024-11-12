'use client'
import { data } from '@/utils/data';

interface Params {
    slug: string; 
}

 function fetchPostData(id: string) {
  
    return data.find(post => post.id == Number(id));
}

const PostPage = ({ params }: { params: Params }) => {
console.log("params", params.slug);
const {slug} = params;

    
    const post = fetchPostData(slug); // Fetch the post data based on the ID

    if (!post) {
        return <h1>Post not found</h1>;
    }

    return (
        <div>
            <h1>{post.postName}</h1>
            <p>{post.description}</p>
            
        </div>
    );
};

export default PostPage;
