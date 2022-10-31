document.addEventListener("DOMContentLoaded", function(event) {
         var codeButtons = document.querySelectorAll('.code-unlock');
         for (var codeButton in codeButtons)
         {
           var codeButtonUnlockDivId = codeButton.getAttribute('unlock-id');
           var codeButtonHideDivId = codeButton.getAttribute('hide-id');
           var codeButtonCode = codeButton.getAttribute('code');
           var codeButtonInputId = codeButton.getAttribute('input-id');
           codeButton.addEventListener('click', () => {
              if (document.getElementById(codeButtonInputId).value == codeButtonCode)
              {
                document.getElementById(codeButtonUnlockDivId).hidden = false;
                document.getElementById(codeButtonHideDivId).hidden = true;
              }
           });
         }
});
