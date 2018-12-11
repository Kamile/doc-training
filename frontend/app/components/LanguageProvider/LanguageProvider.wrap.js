import { connect } from "react-redux"
import { createSelector } from "reselect"
import { makeSelectLocale } from "modules/language/language.selectors"
import LanguageProvider from "./LanguageProvider"

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
)

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageProvider)
