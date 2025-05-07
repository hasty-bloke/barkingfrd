const dogSections = document.querySelectorAll('.dog-section');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const searchBox = document.getElementById('searchBox');

        let visibleCount = 1;

        function showVisibleSections() {
            dogSections.forEach((section, index) => {
                section.style.display = index < visibleCount ? 'block' : 'none';
            });

            if (visibleCount >= dogSections.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-block';
            }
        }

        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 1;
            showVisibleSections();
        });

        searchBox.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (!val) {
                showVisibleSections();
                return;
            }

            dogSections.forEach((section, index) => {
                section.style.display = index == val - 1 ? 'block' : 'none';
            });

            loadMoreBtn.style.display = 'none';
        });

        // Init
        showVisibleSections();