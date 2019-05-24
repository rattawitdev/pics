import React from 'react';
import { Icon } from 'semantic-ui-react'

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment inverted">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              icon={<Icon name='search' inverted circular link />}
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder='ค้นหารูป...'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
