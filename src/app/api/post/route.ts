import prisma from "@/lib/prisma";

export async function GET(){
    // const posts = await prisma.post.findFirst(); 
    // const posts = await prisma.post.findFirstOrThrow();
    // const posts = await prisma.post.findUniqueOrThrow(); 
    // const posts = await prisma.post.findMany(); 
    // const posts = await prisma.post.findMany({
    //     where: {
    //         id: {
    //             //notIn: [1,2]
    //             in: [1,2,3]
    //         }
    //     }
    // })

    //also many to one and one to one is managed through is and isnot 
    const posts = await prisma.post.findMany({
        where : {
            author: {
                // is: {
                //     name: "Jack", 
                // }
                isNot: {
                    name: "Jack"
                }
            }
        }
    })
    return new Response(JSON.stringify(posts)); 
}