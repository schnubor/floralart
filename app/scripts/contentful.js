const contentfulClient = contentful.createClient({
    space: 't6xoez8n3l7f',
    accessToken: '8dcbac3ac21f218861bcb2fe073dbfe02a40adb59cf042b6b5c6bd183b865e2e'
});

const extractImageUrls = (fields) => {
    return fields.map((field) => {
        return field.fields.file.url;
    })
}