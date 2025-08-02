import { db, ContactInformation } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(ContactInformation).values([
		{ name: 'John Doe', email: 'john@example.com', message: 'Hello, world!', lang: 'en' },
		{ name: 'Jane Smith', email: 'jane@example.com', message: 'Hi there!', lang: 'en' },
		{ name: 'Alice Johnson', email: 'alice@example.com', message: 'Greetings!', lang: 'en' }
	]);
}
