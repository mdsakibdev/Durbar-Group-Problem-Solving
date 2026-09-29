/**
 * * এই problem-টা pagination-এর calculation নিয়ে। এখানে Math.ceil(), formula, Math.min(), এবং boolean condition—এই চারটা জিনিস ভালোভাবে বুঝতে হবে
 */

let totalItems = 95, pageSize = 10, currentPage = 10;

// let totalPages = Math.ceil(totalItems / pageSize);
// let startItem = (currentPage - 1) * pageSize + 1;
// let endItem = Math.min(currentPage * pageSize, totalItems);
// let hasPrev = currentPage > 1 ? true : false;
// let hasNext = currentPage < totalPages ? true : false;

function getPageMetadata(totalItems, pageSize, currentPage) {
  let totalPages = Math.ceil(totalItems / pageSize);
    if (totalItems === 0) {
        return {
            totalPages: 0,
            startItem: 0,
            endItem: 0,
            hasPrev: false,
            hasNext: false
        };
    }

    let startItem = (currentPage - 1) * pageSize + 1;
    let endItem = Math.min(currentPage * pageSize, totalItems);
    let hasPrev = currentPage > 1;
    let hasNext = currentPage < totalPages;

    return {
        totalPages,
        startItem,
        endItem,
        hasPrev,
        hasNext
    };
}