import PropTypes from 'prop-types'
import React from 'react'
import { withTranslation } from '../i18n'

const Error = ({ statusCode, t }) => (
  <p>
    {statusCode
      ? t('error-with-status', { statusCode })
      : t('error-without-status')}
  </p>
)

export default withTranslation('common')(Error)
