import { Grid, Formatters, Editors} from 'slickgrid-es6';
import data from '../stubs/data.js';
import {requiredFieldValidator} from '../utilities/utils'

const flatPickrOptions = {
  dateFormat: 'd/m/Y', 
  parseDate: function(input){
    var split = input.split('/');
    return new Date(split[1] + '-' + split[0] + '-' + split[2]);
  }
};

const columns = [
  {id: 'start', name: 'Start', field: 'start', minWidth: 60, editor: Editors.Date, options: { date: flatPickrOptions }},
  {id: 'finish', name: 'Finish', field: 'finish'},
  {id: 'title', name: 'Title', field: 'title', cssClass: 'cell-title', editor: Editors.Text, maxWidth: 100, minWidth: 80, validator: requiredFieldValidator},
  {id: 'duration', name: 'Duration', field: 'duration', resizable: false},
  {id: 'start', name: 'Start', field: 'start', editor: Editors.Date,options: { date: flatPickrOptions }},
  {id: 'finish', name: 'Finish', field: 'finish'},
  {id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven'},
  {id: 'title', name: 'Title', field: 'title', maxWidth: 100, minWidth: 80},
  {id: 'duration', name: 'Duration', field: 'duration', resizable: false},
  {id: 'start', name: 'Start', field: 'start', editor: Editors.Date,options: { date: flatPickrOptions }},
  {id: 'finish', name: 'Finish', field: 'finish'},
  {id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven'},
  {id: 'title', name: 'Title', field: 'title', maxWidth: 100, minWidth: 80},
  {id: 'duration', name: 'Duration', field: 'duration', resizable: false},
  {id: 'finish', name: 'Finish', field: 'finish'},
  {id: 'start', name: 'Start', field: 'start', editor: Editors.Date,options: { date: flatPickrOptions }},
  {id: 'finish', name: 'Finish', field: 'finish'},
  {id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven'},
  {id: '%', name: '% Complete', field: 'percentComplete', formatter: Formatters.PercentCompleteBar}
];
const options = {
  enableCellNavigation: true,
  enableColumnReorder: true,
  forceFitColumns: !true,
  frozenColumn: 0,
  frozenRow: 1,
  editable: true,
  enableAddRow: true,
  asyncEditorLoading: false,
  autoEdit: false
};
export default () => new Grid("#iCargoSpreadSheet", data, columns, options);