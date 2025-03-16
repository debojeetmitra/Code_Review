const PORT = process.env.PORT || 3000; // Use Render's PORT or fallback to 3000 for local dev

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
