export class Customefilter {
}
import { Pipe, PipeTransform } from "@angular/core";
import {Book} from './services/book';
//import { Pipe } from "@angular/core/src/metadata/directives";

@Pipe({
    name:'filterPipe'
}
    
)
export class ProductFilterPipe implements PipeTransform{

transform(value: Book[], filterBy:string)  : Book[]{
    filterBy = filterBy? filterBy.toLocaleLowerCase():null;

return filterBy? value.filter((product: Book) => product.name.toLocaleLowerCase()
.indexOf(filterBy) !== -1): value;
}
}