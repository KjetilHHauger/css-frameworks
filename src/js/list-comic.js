export function loadComicsForm(contentSection) {
    contentSection.innerHTML = `
        <section class="mt-8 flex flex-col items-center md:items-start">
            <h2 class="text-xl font-semibold text-primary mb-4">Add to Comic Book Collection</h2>
            <form class="flex flex-col w-full max-w-lg space-y-4" action="">
                <!-- Comic Book Title -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="title" class="w-24 text-primary mr-2 hidden md:block text-left">Title:</label>
                    <input id="title" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Comic Book Title" required>
                </div>
                <!-- Hero -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="hero" class="w-24 text-primary mr-2 hidden md:block text-left">Hero:</label>
                    <input id="hero" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Hero (e.g., Spider-Man, Batman)" required>
                </div>
                <!-- Issue Number -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="issue" class="w-24 text-primary mr-2 hidden md:block text-left">Issue #:</label>
                    <input id="issue" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Issue Number" required>
                </div>
                <!-- Publisher -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="publisher" class="w-24 text-primary mr-2 hidden md:block text-left">Publisher:</label>
                    <input id="publisher" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Publisher (e.g., Marvel, DC)">
                </div>
                <!-- Publication Year -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="year" class="w-24 text-primary mr-2 hidden md:block text-left">Year:</label>
                    <input id="year" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="number" placeholder="Publication Year (e.g., 1995)" min="1900" max="2099">
                </div>
                <!-- Condition -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="condition" class="w-24 text-primary mr-2 hidden md:block text-left">Condition:</label>
                    <select id="condition" class="flex-1 h-10 p-2 border border-secondary rounded w-48">
                        <option value="" disabled selected>Select Condition</option>
                        <option value="Mint">Mint</option>
                        <option value="Near Mint">Near Mint</option>
                        <option value="Very Fine">Very Fine</option>
                        <option value="Fine">Fine</option>
                        <option value="Very Good">Very Good</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                    </select>
                </div>
                <!-- Estimated Value -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="value" class="w-24 text-primary mr-2 hidden md:block text-left">Value ($):</label>
                    <input id="value" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="number" placeholder="Estimated Value" min="0" step="0.01">
                </div>
                <!-- Image Link -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="image-link" class="w-24 text-primary mr-2 hidden md:block text-left">Image Link:</label>
                    <input id="image-link" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="url" placeholder="https://example.com/comic.jpg">
                </div>
                <!-- Notes -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="notes" class="w-24 text-primary mr-2 hidden md:block text-left">Notes:</label>
                    <textarea id="notes" class="flex-1 h-20 p-2 border border-secondary rounded w-48" placeholder="Additional notes about this comic book (e.g., Signed by artist)"></textarea>
                </div>
                <!-- Submit Button -->
                <div class="flex justify-center md:justify-end">
                    <button type="submit" class="mt-4 px-6 py-2 bg-accent text-white font-semibold rounded hover:bg-accent-hover focus:outline-none w-48 md:w-auto">
                        Add Comic Book
                    </button>
                </div>
            </form>
        </section>
    `;
}
