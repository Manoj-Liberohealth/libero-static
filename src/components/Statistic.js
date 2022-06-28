import '../Assets/css/statistic.css';
const Statistic = (props) => {
    return (
        <section id="statistic" class=" one-page-section">
            <div class="container statistic-section">
                <div class="row text-center">
                    {/* <div class="col-xs-12 col-md-3">
                        <div class="counter">
                            <i class="fa fa-hospital-o fa-2x stats-icon"></i>
                            <h4 class="timer count-title count-number">600+</h4>
                            <div class="stats-line-black"></div>
                            <p class="stats-text">Organizations</p>
                        </div>
                    </div> */}
                    <div class="col-xs-12 col-md-4">
                        <div class="counter">
                            <i class="fa fa-bed fa-2x stats-icon"></i>
                            <h4 class="timer count-title count-number">10000
                            </h4>
                            <div class="stats-line-black"></div>
                            <p class="stats-text">Patients</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <div class="counter">
                            <i class="fa fa-briefcase fa-2x stats-icon"></i>
                            <h4 class="timer count-title count-number">6</h4>
                            <div class="stats-line-black"></div>
                            <p class="stats-text">Business Partners</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <div class="counter">
                            <i class="fa fa-user-md fa-2x stats-icon"></i>
                            <h4 class="timer count-title count-number">1200+</h4>
                            <div class="stats-line-black"></div>
                            <p class="stats-text">Doctors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Statistic;