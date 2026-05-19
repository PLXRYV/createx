

const EventsRoad = () => {
    return (
        <section id="events" className={styles.events}>
            <div className={styles.container}>
                <div className={styles.events__container}>
                    <div className={styles.events__header}>
                        <h6 className={styles.events__header-text}>
                            <span>OUR EVENTS</span>
                            Lectures, workshops & master-classes
                        </h6>
                    </div>
                    <div className={styles.events__sort}>
                        <div className={styles.events__sort-item}>
                            <p className={styles.events__sort-title}>
                                Event category
                            </p>
                            <select id="sortCategory" name="select" className={styles.events__sort-select}>
                                <option value="all">all themes</option>
                                <option value="Online lecture">online lecture</option>
                                <option value="Online workshop">online workshop</option>
                                <option value="Online master-class">online master-class</option>
                            </select>
                        </div>

                        <div className={styles.events__sort-item}>
                            <p className={styles.events__sort-title}>
                                Sort by
                            </p>
                            <select id="sortOrder" name="select" className={styles.events__sort-select}>
                                <option value="asc">newest</option>
                                <option value="desc">oldest</option>
                            </select>
                        </div>

                        <div className={styles.events__sort-item}>
                            <span className={styles.events__sort-title}>Show</span>
                            <div className={styles.events__sort-value}>
                                <span className={styles.value}>9</span>
                                <div className={styles.events__sort-btn}>
                                    <button className={styles.events__sort-btn-plus}><img
                                        src="/src/assets/images/events/buttonTriangleUp.svg" data-fill="false"/></button>
                                    <button className={styles.events__sort-btn-min}><img
                                        src="/src/assets/images/events/buttonTriangleDown.svg" data-fill="false"/></button>
                                </div>
                            </div>
                            <span className={styles.events__sort-description}>events per page</span>
                        </div>

                        <div className={styles.events__sort-search}>
                            <form className={styles.events__sort-search-form} role="search">
                                <input className={styles.events__sort-search-input} aria-label="Search event..."
                                       id="filterInput" type="search" placeholder="Search event..."/>
                                <button className={styles.events__sort-search-btn} type="submit">
                                    <img src="/src/assets/images/events/buttonSearch.svg" alt="Search image"
                                         data-fill="false"/>
                                </button>
                            </form>
                        </div>

                        <div className={styles.events__sort-visual}>
                            <button className={styles.events__sort-visual-btn active} data-view="list">
                                <img src="/src/assets/images/events/visualListBtn.svg" alt="Button visual image"
                                     data-fill="false"/>
                            </button>
                            <button className={styles.events__sort-visual-btn} data-view="grid">
                                <img src="/src/assets/images/events/visualGridBtn.svg" alt="Button visual image"
                                     data-fill="false"/>
                            </button>
                        </div>

                    </div>
                    <ul className={styles.events__navigation}>
                    </ul>
                    <div className={styles.events__pagination}>
                        <button className={styles.events__pagination-page active}>1</button>
                        <button className={styles.events__pagination-page}>2</button>
                        <button className={styles.events__pagination-page}>3</button>
                        <button className={styles.events__pagination-page}>4</button>
                        <button className={styles.events__pagination-page}>
                            <img src="/src/assets/images/events/buttonArrowRight.svg" alt="button next" data-fill="false"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventsRoad;