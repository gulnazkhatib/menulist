/*
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const meals = ['Breakfast', 'Lunch', 'Dinner'];
        const menu = document.querySelector('#menu');

        for (const day of days) {
            const row = document.createElement('tr');
            row.innerHTML = `<td class="py-4 px-6 border-b border-gray-200 bg-white text-sm">${day}</td>`;

            for (const meal of meals) {
                const cell = document.createElement('td');
                cell.classList.add('py-4', 'px-6', 'border-b', 'border-gray-200', 'bg-white', 'text-sm');
                cell.innerHTML = `<input type="text" class="w-full" placeholder="${meal}">`;
                row.appendChild(cell);
            }

            menu.appendChild(row);
        }

        const exportButton = document.querySelector('#export');
        exportButton.addEventListener('click', () => {
            const data = [];
            data.push(['Day', ...meals]);

            for (const row of menu.rows) {
                const rowData = [row.cells[0].textContent];
                for (let i = 1; i < row.cells.length; i++) {
                    rowData.push(row.cells[i].querySelector('input').value);
                }
                data.push(rowData);
            }

            const worksheet = XLSX.utils.aoa_to_sheet(data);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Weekly Menu');
            XLSX.writeFile(workbook, 'weekly-menu.xlsx');
        });

        const printButton = document.querySelector('#print');
        printButton.addEventListener('click', () => {
            window.print();
        });

        function shareViaEmail(subject, body) {
            const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailto);
        }


        const shareButton = document.querySelector('#share');
        shareButton.addEventListener('click', () => {
            shareViaEmail('Check out this page', 'Take a look at this page: ' + window.location.href);
        });
    */




        var ops = [5,2,];
        var calpoints = function(ops){
        var result = null;
        for(i=0;i<ops.length;i++){

            result = result + ops[i];
            ops[i]++;
            if(ops[i]=='C'){
                
            }
        }
return result;
    }
    console.log('hi');
    console.log(calpoints(ops));