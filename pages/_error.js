import PropTypes from 'prop-types'
import React from 'react'
import { withTranslation } from '../i18n'

const Error = ({ statusCode, t }) => (
  <div style={{ "position": "fixed", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)" }}>
    <h1>{statusCode
      ? t('error-with-status', { statusCode })
      : "Aradığın sayfa bulunamadı."}
    </h1>
  </div>
)

export default withTranslation('home')(Error)
