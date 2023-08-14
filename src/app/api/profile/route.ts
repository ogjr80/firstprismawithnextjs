import prisma from "@/lib/prisma";

export async function GET(){
    const profile = await prisma.profile.findMany(); 
    return new Response(JSON.stringify(profile)); 
}