import Axios from "axios";

class ApiHelper {
  static  urlSmap2Navisu = 'http://93.90.200.21:3004/';
  static  urlControl = 'http://93.90.200.21:3003/';

  static setHeader() {
    Axios.defaults.headers.common = {'Access-Control-Allow-Origin': '*'};
  }
  static getScenarios() {
    return Axios({
      method: 'get',
      url: ApiHelper.urlSmap2Navisu + 'scenarios',
    });
  }

  static selectPilotScenario(scenarioName) {
    const time  = new Date().toISOString();
    return Axios({
      method: 'get',
      url: ApiHelper.urlControl + 'control?cmd=read&origin=TV&path=scenarios/'+scenarioName+'&target='+ scenarioName +'.json&timestamp=' + time
    });
  }

  static activeQuestion(startId) {
    const time  = new Date().toISOString();
    return Axios({
      method: 'get',
      url: ApiHelper.urlControl + 'control?cmd=question&origin=TV&target='+startId+'&origin='+'TV'+'&timestamp=' + time
    });
  }


  static startPilotScenario(startId) {
   const time  = new Date().toISOString();
    return Axios({
      method: 'get',
      url: ApiHelper.urlControl + 'control?cmd=start&target='+startId+ '&origin=TV&timestamp=' + time
    });
  }

  static stopPilotScenario(stopId) {
    const time  = new Date().toISOString();
    return Axios({
      method: 'get',
      url: ApiHelper.urlControl + 'control?cmd=stop&target='+stopId+'&origin='+'TV'+'&timestamp=' + time
    });
  }

  static setQuestionTrue(trueId) {
    const time  = new Date().toISOString();
    return Axios({
      method: 'get',
      url: ApiHelper.urlControl + 'control?cmd=validate&target='+trueId+'&origin='+'TV'+'&timestamp=' + time
    });
  }

  static setQuestionfalse(falseId) {
    const time  = new Date().toISOString();
    return Axios({
      method: 'get',
      url: ApiHelper.urlControl + 'control?cmd=validate&target='+falseId+'&origin='+'TV'+'&timestamp=' + time
    });
  }

  static activeReponse(falseId) {
    const time  = new Date().toISOString();
    return Axios({
      method: 'get',
      url: ApiHelper.urlControl + 'control?cmd=response&target='+falseId+'&origin='+'TV'+'&timestamp=' + time
    });
  }







}

export default ApiHelper
