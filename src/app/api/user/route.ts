import prisma from "@/lib/prisma";

export async function GET(){
    
    //find and retrieve all the users in the system 
    // const user= await prisma.user.findMany(); 
    
    //find a user where the name is John
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: "John", 
    //     }
    // }) 

    //find all users where the name startWith a letter
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: {
    //             startsWith: "J", 
    //         }
    //     }
    // })

    //find all users where the name startWith a letter and endWith a letter
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: {
    //             startsWith: "J", 
    //             endsWith: "n"
    //         }
    //     }
    // })

    //find all users where the name ends with a letter
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: {
    //             endsWith: "k"
    //         }
    //     }
    // })

    //find all users where the user contains a character
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: {
    //             contains: "o"
    //         }
    //     }
    // })
    
    //find all users where names startswith a letter and contains a keyword. 
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: {
    //             contains: "o", 
    //             startsWith: "J", 
    //         }
    //     }
    // })

    //find all users where the the id is in or notIn a particular list of ids
    // const user = await prisma.user.findMany({
    //     where: {
    //         id: {
    //            //in: [1,2]
    //             notIn: [1,2]
    //         }
    //     }
    // })
    
    //find all users where id is "not" and "in" operators 
    // const user = await prisma.user.findMany({
    //     where: {
    //         id: {
    //             not: {
    //                 gt: 4
    //             }
    //         }
    //     }
    // })

    //using the OR operation to find users with id gt and startWiths operator 
    // const user = await prisma.user.findMany({
    //     where: {
    //         OR: [
    //             {
    //                 id: {
    //                     not: {
    //                         gt: 2
    //                     }
    //                 }
    //             }, 
    //             {
    //                 name: {
    //                     startsWith: "J", 
    //                     endsWith: "k"
    //                 }
    //             }
    //         ]
    //     }
    // })

    //same queries as above with the AND operator and with mode set to insensitive
    // const user = await prisma.user.findMany({
    //     where: {
    //         AND: [
    //             {
    //                 id: {
    //                     not: {
    //                         gt: 2
    //                     }
    //                 }
    //             }, 
    //             {
    //                 name: {
    //                     startsWith: "j", 
    //                     endsWith: "k", 
    //                     mode: "insensitive"
    //                 }
    //             }
    //         ]
    //     }
    // })

    //relation filters | one-may| many-many | one - one using every, some, and none
    
    //find every user where every of the users post has a published property set to true
    const user = await prisma.user.findMany({
        where: {
            posts: {
                every: {
                    published: true
                }
                // some: {
                //     published: true
                // }

                // none: {
                //     published: true
                // }
            }
        }
    })
    
    return new Response(JSON.stringify(user)); 
}

