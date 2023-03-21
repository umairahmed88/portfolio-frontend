import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "d8yg79fk",
	dataset: "production",
	apiVersion: "2022-02-01",
	useCdn: true,
	token:
		"sk3lYZZS18ZJARbanM7vQpU9OA6Bxzk5rU4zEo7y6iYWGL74txPyp7cBd465Nauf5J65g5u78G1M1WvLyrE36hrwmjY1mMVWWzQ5ehlM4ePXb5RAAc2aMClUqO7INfPErG8aYCU6r0HLKT7jFxC372L7xK0AKHD5CDNlT0AeCTHH6AGEQZMK",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
