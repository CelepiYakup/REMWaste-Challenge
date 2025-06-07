// components/ChooseSkipPage/ChooseSkipPage.tsx
import React from 'react';
import ProgressSteps from '../components/ProgressStep/ProgresStep';
import PageHeader from '../components/PageHeader/pageHeader';
import FilterBar from '../components/FilterBar/filterBar';
import SkipCard from '../components/SkipCard/skipCard';
import SelectionBar from '../components/SelectionBar/selectionBar';
import Loading from '../components/Loading/loading';
import Footer from '../components/Footer/footer';
import { useSkips } from '../hooks/useSkips';
import { useSkipFilters } from '../hooks/useSkipFilters';
import { useSkipSelection } from '../hooks/useSkipSelection';
import './ChooseSkipPage.css';

const ChooseSkipPage: React.FC = () => {
  const { skips, loading, error } = useSkips();
  const { filterState, setFilterState, filteredSkips } = useSkipFilters(skips);
  const { selectedSkip, totalPrice, handleSelect, clearSelection } = useSkipSelection(skips);

  const handleContinue = () => {
    if (selectedSkip) {
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error Loading Skips</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="choose-skip-page">
      <ProgressSteps />
      <PageHeader />
      
      <FilterBar 
        filterState={filterState}
        onFilterChange={setFilterState}
        onClearSelection={clearSelection}
        sizes={Array.from(new Set(skips.map(s => s.size))).sort((a, b) => a - b)}
      />

      <div className="page-content">
        {filteredSkips.length > 0 ? (
          <div className="skip-grid">
            {filteredSkips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                onSelect={handleSelect}
                isSelected={skip.id === selectedSkip?.id}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            No skip options match your filter criteria.
          </div>
        )}
      </div>

      {selectedSkip && (
        <SelectionBar 
          selectedSkip={selectedSkip}
          totalPrice={totalPrice}
          onContinue={handleContinue}
        />
      )}

      <Footer />
    </div>
  );
};

export default ChooseSkipPage;