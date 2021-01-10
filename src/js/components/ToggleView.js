import React from 'react'
import className from 'classnames'
import { connect } from 'react-redux'
import { setFilter } from '../../redux/actions'
import { TOGGLE_VIEW } from '../../constants'

const ToggleView = ({ activeFilter, setFilter }) => {
  return (
    <div className="filter-block">
      {Object.keys(TOGGLE_VIEW).map(filterKey => {
        const currentFilter = TOGGLE_VIEW[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={className(
              'filter-block__item',
              currentFilter === activeFilter && 'filter-block__item-active'
            )}
            onClick={() => setFilter(currentFilter)}
          >
            {currentFilter}
          </span>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({ activeFilter: state.toggleView })

export default connect(mapStateToProps, { setFilter })(ToggleView)
