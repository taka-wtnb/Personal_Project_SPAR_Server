const {costReductionPieChartByItemQuery} = require('../queries/cost_reduction_pie_chart_by_item_query');

const getCostReductionPieChartByItem = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
    const itemId = parseInt(request.query.itemId);
    const start = request.query.start;
    const end = request.query.end;
  
    pool.query(costReductionPieChartByItemQuery, [supplierId, itemId, start, end], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}
  
module.exports = {
    getCostReductionPieChartByItem,
}