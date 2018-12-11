import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const withDispatch = (actionCreator, ...args) => WrappedComponent => {
  class Wrapper extends React.Component {
    componentDidMount() {
      this.props.actionDispatcher(...args)
    }

    render() {
      const { actionDispatcher, ...otherProps } = this.props
      return <WrappedComponent {...otherProps} />
    }
  }

  Wrapper.propTypes = {
    actionDispatcher: PropTypes.func,
  }

  const mapDispatchToProps = {
    actionDispatcher: actionCreator,
  }

  return connect(
    null,
    mapDispatchToProps,
  )(Wrapper)
}

export default withDispatch
