import FileSaver from 'file-saver'

import { requestAttempt, requestSuccess, requestFailure } from 'document-review/redux/actions/notification'
import { getUserTimezone } from 'document-review/utils/userTimezone'
import DataExportApi from 'dataExport/services/dataExportApi'
import { getApiNumbers } from './selectors'

export const EXPORT_DOCUMENTS_HISTORY_TO_CSV_1 = 'exportDocsHistoryToCSV'
export const exportDocsHistoryToCSV = () => {
  return async (dispatch, getState) => {
    let response
    dispatch(requestAttempt(EXPORT_DOCUMENTS_HISTORY_TO_CSV_1))
    try {
      const state = getState()
      const apiNumbers = getApiNumbers(state)
      const timezone = getUserTimezone()
      response = await DataExportApi.exportDocsHistoryToCSV({ apiNumbers, timezone })
      FileSaver.saveAs(response, 'documents-history.csv')
      dispatch(requestSuccess(EXPORT_DOCUMENTS_HISTORY_TO_CSV_1))
    } catch (error) {
      console.error(error)
      dispatch(requestFailure(EXPORT_DOCUMENTS_HISTORY_TO_CSV_1, error))
    }
  }
}


import FileSaver from 'file-saver'

import { requestAttempt, requestSuccess, requestFailure } from 'document-review/redux/actions/notification'
import { getUserTimezone } from 'document-review/utils/userTimezone'
import DataExportApi from 'dataExport/services/dataExportApi'
import { getApiNumbers } from './selectors'

export const EXPORT_DOCUMENTS_HISTORY_TO_CSV_2 = 'exportDocsHistoryToCSV'
export const exportDocsHistoryToCSV = () => {
  return async (dispatch, getState) => {
    let response
    dispatch(requestAttempt(EXPORT_DOCUMENTS_HISTORY_TO_CSV_2))
    try {
      const state = getState()
      const apiNumbers = getApiNumbers(state)
      const timezone = getUserTimezone()
      response = await DataExportApi.exportDocsHistoryToCSV({ apiNumbers, timezone })
      FileSaver.saveAs(response, 'documents-history.csv')
      dispatch(requestSuccess(EXPORT_DOCUMENTS_HISTORY_TO_CSV_2))
    } catch (error) {
      console.error(error)
      dispatch(requestFailure(EXPORT_DOCUMENTS_HISTORY_TO_CSV_2, error))
    }
  }
}
