(function() {
    var $lookup = $('#lookup'),
        $results = $('#results'),
        displayedIndex = 0,
        displayLimit,
        currentQuery,
        currentData;

    $('form').on('submit', function(e) {
        currentQuery = $lookup.val();
        $.getJSON('/lookup/' + currentQuery, function(data) {
            currentData = data;
            displayedIndex = 0;
            displayLimit = Math.min(currentData.length, 3);

            var initialDisplay = data.length > 0 ? data[0] : 'No results found for "' + currentQuery + '"';
            $results.prepend(wrapResult(initialDisplay));
        });

        $lookup.select();
        e.stopPropagation();
        e.preventDefault();
        return false;
    });

    $lookup.on('keydown', function(e) {
        var caught = false;
        if (e.keyCode === 219) {
            displayedIndex = Math.max(0, displayedIndex - 1);
            caught = true;
        }
        else if (e.keyCode === 221) {
            displayedIndex = Math.min(displayLimit, displayedIndex + 1);
            caught = true;

        }

        if (caught) {
            e.preventDefault();
            updateDisplayed();
            return false;
        }
    });

    function wrapResult(data) {
        return $('<div class="jisho-result">').html(data);
    }

    function updateDisplayed() {
        $results.find('.jisho-result').first().html(currentData[displayedIndex]);
    }
}());
