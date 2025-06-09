
row.innerHTML = `
    <td>${platform['п/п']}</td>
    <td>${platform.Сайт}</td>
    <td>${platform.Формат}</td>
    <td>${platform.Категория}</td>
    <td>${platform.CPM ? platform.CPM.toFixed(2) : '-'}</td>
    <td>${ctrFormatted}</td>
    <td>${platform.CPC ? platform.CPC.toFixed(2) : '-'}</td>
    <td>${vtrFormatted}</td>
    <td>${platform.CPT ? platform.CPT.toFixed(2) : '-'}</td>
    <td>${platform.CPA ? platform.CPA.toFixed(2) : '-'}</td>
    <td>
        <input type="checkbox" class="new-product-checkbox" data-id="${platform['п/п']}">
    </td>
    <td>
        <input type="checkbox" class="known-product-checkbox" data-id="${platform['п/п']}">
    </td>
    <td>
        <a href="#" class="hint-link" data-id="${platform['п/п']}">подсказать</a>
    </td>
    <td>
        <input type="checkbox" class="compare-checkbox" data-id="${platform['п/п']}" 
            ${this.platformsForComparison.includes(platform['п/п']) ? 'checked' : ''}>
    </td>
`;
