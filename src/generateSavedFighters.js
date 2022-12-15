function generateSavedFightersHTML(chacter) {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/output.css">
    <title>DND Combat Simulator</title>
</head>
<body class="bg-red-600">
    <!-- Navbar -->
    <header class="bg-red-600 sticky">
        <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div class="flex w-full items-center justify-between border-b border-black py-6 lg:border-none">
                <div class="flex items-center">
                    <a href="index.html">
                        <!-- screen reader -->
                        <span class="sr-only">Dungeon and Dragons combat simulator</span>
                        <img class="h-10 w-auto" src="https://clipground.com/images/dd-logo-9.png" alt="">
                    </a>
                    <!-- Navbar links -->
                    <div class="ml-10 hidden space-x-8 lg:block">
                        <a href="savedFighters.html" class="text-base font-medium text-white hover:text-indigo-50">Saved Fighters</a>
                        <a href="https://github.com/Alex-C-Codes/DnD-Combat-Simulator" class="text-base font-medium text-white hover:text-indigo-50">Github</a>
                    </div>
                </div>
            </div>
            <!-- Mobile Navbar links -->
            <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
                <a href="#" class="text-base font-medium text-white hover:text-indigo-50">Saved Fighters</a>
                <a href="https://github.com/Alex-C-Codes/DnD-Combat-Simulator" class="text-base font-medium text-white hover:text-indigo-50">Github</a>
            </div>
        </nav>
    </header>  

    <!-- Hero Image -->
    <div class="relative bg-gray-700">
        <div class="absolute inset-0">
            <img class="h-full w-full object-cover mobile-container" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2019/11/5-Fighter-Abilities-To-Use-And-5-To-Avoid_Feature-Image.jpg?q=50&fit=contain&w=1140&h=570&dpr=1.5" alt="Dungeon and dragons hero image">
            <div class="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold tracking-tight text-red-600 sm:text-5xl lg:text-6xl">Saved Fighters</h1>
            <p class="mt-6 max-w-3xl text-xl text-indigo-100">Below you will find a list of your saved fighters.</p>
        </div>
    </div>  

    <!-- Saved fighter list -->
    <div class="container flex flex-col items-center mt-5 mx-auto">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${chacter.name}</td>
                    <td>${chacter.type}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <!-- Footer -->
    <footer class="bg-red-500 mt-10 sticky text-black text-right">
        <p>This simulator is brought to you by Alex, Kevin & Tyler</p>
    </footer>

</body>
</html>
`;
}

module.exports = generateSavedFightersHTML;