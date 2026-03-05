import fs from 'fs';
import { parse } from 'csv-parse';

export class DataProvider {
    static getTestDataFromJson(filePath: string):string {
       let data:string = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
       return data;
    }

    static getTestDataFromCsv(filePath: string) {
        let data:any = parse(fs.readFileSync(filePath, 'utf-8'), {columns: true, skip_empty_lines:true})
        return data;
    }
}