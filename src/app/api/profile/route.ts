import prisma from "@/lib/prisma";

export async function GET(){
    const profile = await prisma.profile.findMany(); 
    // const profile = await prisma.profile.findFirstOrThrow(); 
    return new Response(JSON.stringify(profile)); 
}