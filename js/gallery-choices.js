document.addEventListener("DOMContentLoaded", () => {

    const galleryChoicesSelect = document.querySelector('.js-gallery-choices');
    const galleryChoices  =  new Choices(galleryChoicesSelect, {
        shouldSort: false,
        position: 'bottom',
        searchEnabled: false,
        itemSelectText: '',


        classNames: {
            containerOuter: 'filter-choices gallery__choices',
            containerInner: 'filter-choices__inner',
            input: 'filter-choices__input',
            inputCloned: 'filter-choices__input--cloned',
            list: 'filter-choices__list',
            listItems: 'filter-choices__list--multiple',
            listSingle: 'filter-choices__list--single',
            listDropdown: 'filter-choices__list--dropdown',
            item: 'filter-choices__item',
            itemSelectable: 'filter-choices__item--selectable',
            itemDisabled: 'filter-choices__item--disabled',
            itemOption: 'filter-choices__item--choice',
            group: 'filter-choices__group',
            groupHeading : 'filter-choices__heading',
            button: 'filter-choices__button',
            activeState: 'is-active',
            focusState: 'is-focused',
            openState: 'is-open',
            disabledState: 'is-disabled',
            highlightedState: 'is-highlighted',
            selectedState: 'is-selected',
            flippedState: 'is-flipped',
            // selectedState: 'is-highlighted',
            itemChoice: 'filter-choices__item--choice',
          }
    }) ;
});