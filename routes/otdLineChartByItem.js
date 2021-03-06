const {otdLineChartByItemQuery} = require('../queries/otd_line_chart_by_item_query');

const getOTDLineChartByItem = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
    const itemId = parseInt(request.query.itemId);
    const start = request.query.start;
    const end = request.query.end;
  
    pool.query(otdLineChartByItemQuery, [supplierId, itemId, start, end], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getOTDLineChartByItem,
}