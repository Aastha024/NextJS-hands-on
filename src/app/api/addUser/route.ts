import fs from 'fs';
interface User {
  id: number;
  name: string;
  email: string;
}
let ids = 1;

export async function POST(request: Request): Promise<Response> {
  
  const {name, email } = await request.json() as { name: string; email: string };

  let users: User[] = [];

  try {
    const data = fs.readFileSync('users.json', 'utf-8');
    users = JSON.parse(data);
  } catch (error) {
    console.log('errors', error);
  }

  users.push({ id: ids++, name, email });

  fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf-8');

  console.log("user", users);
  
  return new Response(
    JSON.stringify({ message: `Received name: ${name}, email: ${email}` }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
