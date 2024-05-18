import db from "@/db/drizzle";
import { todo } from "@/db/schema";
import { eq, not, asc } from "drizzle-orm";
// adds todo 
export const addTodo = async (id: number, text: string) => {
    await db.insert(todo).value({
        id: id,
        text: text,
    });
};

// gets todo
export const getData = async () => {
    const data = await db.select().from(todo).orderBy(asc(todo.id));
    return data
};

// edits todo
export const editTodo = async (id:number, text:string) => {
    await db
    .update(todo)
    .set({
        text:text,
    })    
    .where(eq(todo.id, id));
};

// toggle todo 
export const toggleTodo = async (id:number) => {
    await db
    .update(todo)
    .set({
        done: not(todo.done),
    })
    .where(eq(todo.id,id))
    
}

// delete todo
export const deleteTodo = async (id: number) => {
    await db.delete(todo).where(eq(todo.id, id));
};