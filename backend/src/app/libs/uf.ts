import axios from "axios";
import moment from "moment";

const URL_UF = "https://mindicador.cl/api/uf/";
export class UFConverter {
  constructor() {}

  public static async getUFValueToday(): Promise<any> {
    try {
      const res = await axios.get(URL_UF);
      return res.data.serie[0].valor;
    } catch (error) {
      return error;
    }
  }

  public static async getUFValue(date: Date): Promise<any> {
    try {
      const res = await axios.get(`${URL_UF}${this.converterDate(date)}`);
      return res.data.serie[0].valor;
    } catch (error) {
      return error;
    }
  }

  private static converterDate(date: Date): string {
    var dateParsed = moment(date, "YYYY/MM/DD");

    var day = dateParsed.format("DD");
    var month = dateParsed.format("MM");
    var year = dateParsed.format("YYYY");

    return `${day}-${month}-${year}`;
  }
}
