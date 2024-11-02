export function loadTCGForm(contentSection) {
    contentSection.innerHTML = `
        <section class="mt-8 flex flex-col items-center md:items-start">
            <h2 class="text-xl font-semibold text-primary mb-4">Add to Trading Card Game Collection</h2>
            <form class="flex flex-col w-full max-w-lg space-y-4 mx-8" action="">
                <!-- Card Name -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="card-name" class="w-24 text-primary mr-2 hidden md:block text-left">Card Name:</label>
                    <input id="card-name" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Card Name" required>
                </div>
                <!-- Set Name -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="set-name" class="w-24 text-primary mr-2 hidden md:block text-left">Set Name:</label>
                    <input id="set-name" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Set Name (e.g., Base Set, Champions Path)" required>
                </div>
                <!-- Card Type -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="card-type" class="w-24 text-primary mr-2 hidden md:block text-left">Card Type:</label>
                    <input id="card-type" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Card Type (e.g., Monster, Spell)">
                </div>
                <!-- Condition -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="condition" class="w-24 text-primary mr-2 hidden md:block text-left">Condition:</label>
                    <select id="condition" class="flex-1 h-10 p-2 border border-secondary rounded w-48">
                        <option value="" disabled selected>Select Condition</option>
                        <option value="Mint">Mint</option>
                        <option value="Near Mint">Near Mint</option>
                        <option value="Very Fine">Very Fine</option>
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
                    <input id="image-link" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="url" placeholder="https://example.com/card.jpg">
                </div>
                <!-- Notes -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="notes" class="w-24 text-primary mr-2 hidden md:block text-left">Notes:</label>
                    <textarea id="notes" class="flex-1 h-20 p-2 border border-secondary rounded w-48" placeholder="Additional notes about this card"></textarea>
                </div>
                <!-- Submit Button -->
                <div class="flex justify-center md:justify-end">
                    <button type="submit" class="mt-4 px-6 py-2 bg-accent text-white font-semibold rounded hover:bg-accent-hover focus:outline-none w-48 md:w-auto">
                        Add TCG Card
                    </button>
                </div>
            </form>
        </section>
    `;
}
