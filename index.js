const express = require('express');
const cors = require('cors');

const {pool} = require('./config');

const suppliers = require('./routes/suppliers');
const items = require('./routes/items');
const dashboardopenordertable = require('./routes/dashboardOpenOrderTable');
const dashboardPendingQualityIssueTable = require('./routes/dashboardPendingQualityIssueTable');
const dashboardSpendingChart = require('./routes/dashboardSpendingChart');
const dashboardSpendingChartByItem = require('./routes/dashboardSpendingChartByItem');
const dashboardSpendingTable = require('./routes/dashboardSpendingTable');
const otdLineChart = require('./routes/otdLineChart');
const otdLineChartByItem = require('./routes/otdLineChartByItem');
const otdPieChart = require('./routes/otdPieChart');
const otdPieChartByItem = require('./routes/otdPieChartByItem');
const otdTable = require('./routes/otdTable');
const costReductionLineChart = require('./routes/costReductionLineChart');
const costReductionPieChart = require('./routes/costReductionPieChart');
const costReductionPieChartByItem = require('./routes/costReductionPieChartByItem');
const costReductionTable = require('./routes/costReductionTable');
const costReductionBestWorstTable = require('./routes/costReductionBestWorstTable');
const qualityManagementBarChart = require('./routes/qualityManagementBarChart');
const qualityManagementBarChartByItem = require('./routes/qualityManagementBarChartByItem');
const qualityManagementPieChart = require('./routes/qualityManagementPieChart');
const qualityManagementPieChartByItem = require('./routes/qualityManagementPieChartByItem');
const qualityTable = require('./routes/qualityTable');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => { res.send('It is working!') });
app.get('/suppliers', suppliers.getSuppliers(pool));
app.get('/items', items.getItems(pool));
app.get('/dashboardopenordertable/', dashboardopenordertable.getDashboardOpenOrderTable(pool));
app.get('/dashboardpendingqualityissuetable/', dashboardPendingQualityIssueTable.getDashboardPendingQualityIssueTable(pool));
app.get('/dashboardspendingchart/', dashboardSpendingChart.getDashboardSpendingChart(pool));
app.get('/dashboardspendingchartbyitem/', dashboardSpendingChartByItem.getDashboardSpendingChartByItem(pool));
app.get('/dashboardspendingtable/', dashboardSpendingTable.getDashboardSpendingTable(pool));
app.get('/otdlinechart/', otdLineChart.getOTDLineChart(pool));
app.get('/otdlinechartbyitem/', otdLineChartByItem.getOTDLineChartByItem(pool));
app.get('/otdpiechart/', otdPieChart.getOTDPieChart(pool));
app.get('/otdpiechartbyitem/', otdPieChartByItem.getOTDPieChartByItem(pool));
app.get('/otdtable/', otdTable.getOTDTable(pool));
app.get('/costreductionlinechart/', costReductionLineChart.getCostReductionLineChart(pool));
app.get('/costreductionpiechart/', costReductionPieChart.getCostReductionPieChart(pool));
app.get('/costreductionpiechartbyitem/', costReductionPieChartByItem.getCostReductionPieChartByItem(pool));
app.get('/costreductiontable/', costReductionTable.getCostReductionTable(pool));
app.get('/costreductionbestworsttable/', costReductionBestWorstTable.getCostReductionBestWorstTable(pool));
app.get('/qualitymanagementbarchart/', qualityManagementBarChart.getQualityManagementBarChart(pool));
app.get('/qualitymanagementbarchartbyitem/', qualityManagementBarChartByItem.getQualityManagementBarChartByItem(pool));
app.get('/qualitymanagementpiechart/', qualityManagementPieChart.getQualityManagementPieChart(pool));
app.get('/qualitymanagementpiechartbyitem/', qualityManagementPieChartByItem.getQualityManagementPieChartByItem(pool));
app.get('/qualitytable/', qualityTable.getQualityTable(pool));

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is listening");
});